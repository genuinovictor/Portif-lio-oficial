// Função para animações de rolagem suave
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Alternância do menu em dispositivos móveis
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle?.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Função para abrir o modal (aba) com informações do projeto
const project1 = document.getElementById('project1');
const project2 = document.getElementById('project2');
const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

// Dados do projeto
const projectInfo = {
    project1: {
        title: 'Projeto 1',
        description: 'Este é o projeto 1. Ele envolveu a construção de uma aplicação interativa usando tecnologias como HTML, CSS e JavaScript.',
        details: 'Detalhes adicionais sobre o projeto 1: Ele inclui funcionalidades de interação com o usuário e um design moderno.'
    },
    project2: {
        title: 'Projeto 2',
        description: 'Este é o projeto 2. Ele é baseado em uma aplicação web dinâmica usando React e Node.js.',
        details: 'Detalhes adicionais sobre o projeto 2: A aplicação permite que os usuários se cadastrem e interajam com conteúdo gerado em tempo real.'
    }
};

// Função para abrir o modal com os detalhes do projeto
function openModal(project) {
    modal.style.display = "block";
    modalContent.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Mais Detalhes:</strong> ${project.details}</p>
    `;
}

// Função para fechar o modal
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

// Adicionar evento de clique nas imagens dos projetos para abrir o modal
project1.addEventListener('click', () => openModal(projectInfo.project1));
project2.addEventListener('click', () => openModal(projectInfo.project2));

// Fechar o modal ao clicar fora da área do modal
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
