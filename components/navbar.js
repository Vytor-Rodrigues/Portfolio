class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background-color: rgba(17, 24, 39, 0.8);
                    backdrop-filter: blur(10px);
                }
                .nav-link {
                    position: relative;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -2px;
                    left: 0;
                    background-color: #9f7aea;
                    transition: width 0.3s ease;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
                .active::after {
                    width: 100%;
                }
            </style>
            <nav class="fixed w-full z-50 border-b border-gray-800">
                <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="#" class="text-2xl font-bold text-white">
                        Dark<span class="text-purple-500">Canvas</span>
                    </a>
                    <div class="hidden md:flex space-x-8">
                        <a href="#" class="nav-link text-gray-300 hover:text-white">Home</a>
                        <a href="#work" class="nav-link text-gray-300 hover:text-white">Work</a>
                        <a href="#contact" class="nav-link text-gray-300 hover:text-white">Contact</a>
                    </div>
                    <button id="theme-toggle" class="p-2 rounded-full hover:bg-gray-700 transition-colors">
                        <i data-feather="moon" class="text-gray-300"></i>
                    </button>
                    <button class="md:hidden p-2 rounded-full hover:bg-gray-700 transition-colors">
                        <i data-feather="menu" class="text-gray-300"></i>
                    </button>
                </div>
            </nav>
        `;
    }
}
customElements.define('custom-navbar', CustomNavbar);
