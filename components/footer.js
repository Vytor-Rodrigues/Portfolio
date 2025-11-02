class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background: linear-gradient(to right, rgba(17, 24, 39, 0.9), rgba(55, 48, 163, 0.9));
                }
                .social-icon {
                    transition: all 0.3s ease;
                }
                .social-icon:hover {
                    transform: translateY(-3px);
                    color: #9f7aea;
                }
            </style>
            <footer class="py-12">
                <div class="container mx-auto px-4">
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <div class="mb-6 md:mb-0">
                            <h2 class="text-2xl font-bold text-white mb-2">
                                Dark<span class="text-purple-300">Canvas</span>
                            </h2>
                            <p class="text-gray-400">Crafting digital experiences with dark aesthetics</p>
                        </div>
                        <div class="flex space-x-6">
                            <a href="#" class="social-icon text-gray-400 hover:text-white">
                                <i data-feather="github"></i>
                            </a>
                            <a href="#" class="social-icon text-gray-400 hover:text-white">
                                <i data-feather="twitter"></i>
                            </a>
                            <a href="#" class="social-icon text-gray-400 hover:text-white">
                                <i data-feather="linkedin"></i>
                            </a>
                            <a href="#" class="social-icon text-gray-400 hover:text-white">
                                <i data-feather="instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
                        <p>© ${new Date().getFullYear()} DarkCanvas. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);
