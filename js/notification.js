class NotificationSystem {
    constructor() {
        this.toastContainer = null;
        this.init();
    }

    init() {
        if (!document.querySelector('.toast-container')) {
            this.toastContainer = document.createElement('div');
            this.toastContainer.className = 'toast-container';
            document.body.appendChild(this.toastContainer);
        } else {
            this.toastContainer = document.querySelector('.toast-container');
        }
    }

    showToast(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        const icons = { success: '✓', error: '✕', info: 'i' };

        toast.innerHTML = `
            <div class="toast-icon">${icons[type] || icons.info}</div>
            <div class="toast-message">${message}</div>
            <button class="toast-close" aria-label="Close">&times;</button>
        `;

        this.toastContainer.appendChild(toast);
        toast.querySelector('.toast-close').addEventListener('click', () => this.removeToast(toast));
        setTimeout(() => this.removeToast(toast), duration);
    }

    removeToast(toast) {
        toast.classList.add('hiding');
        setTimeout(() => { if (toast.parentElement) toast.remove(); }, 300);
    }

    showConfirm(message, onConfirm, onCancel = null, options = {}) {
        const {
            title = 'Konfirmasi',
            confirmText = 'Ya, Lanjutkan',
            cancelText = 'Batal',
            icon = '👤'
        } = options;

        const overlay = document.createElement('div');
        overlay.className = 'confirm-overlay';

        overlay.innerHTML = `
            <div class="confirm-dialog">
                <div class="confirm-header">
                    <div class="confirm-icon">${icon}</div>
                    <h3 class="confirm-title">${title}</h3>
                </div>
                <p class="confirm-message">${message}</p>
                <input type="text" id="confirm-input-field" class="confirm-input" placeholder="Masukkan nama..." style="width: 100%; padding: 10px; margin-top: 10px; border-radius: 8px; border: 1px solid #ccc; box-sizing: border-box;">
                <div class="confirm-actions">
                    <button class="confirm-btn confirm-btn-cancel">${cancelText}</button>
                    <button class="confirm-btn confirm-btn-confirm">${confirmText}</button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        const inputField = overlay.querySelector('#confirm-input-field');
        const cancelBtn = overlay.querySelector('.confirm-btn-cancel');
        const confirmBtn = overlay.querySelector('.confirm-btn-confirm');

        const close = (confirmed) => {
            const val = inputField.value; 
            overlay.style.animation = 'fadeOut 0.2s ease-out';
            setTimeout(() => {
                overlay.remove();
                if (confirmed && onConfirm) {
                    onConfirm(val); 
                } else if (!confirmed && onCancel) {
                    onCancel();
                }
            }, 200);
        };

        cancelBtn.addEventListener('click', () => close(false));
        confirmBtn.addEventListener('click', () => close(true));
        
        inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') close(true);
        });
    }
}

const notification = new NotificationSystem();
window.customNotify = {
    showToast: (message, type, duration) => notification.showToast(message, type, duration),
    showConfirm: (message, onConfirm, onCancel, options) => notification.showConfirm(message, onConfirm, onCancel, options)
};