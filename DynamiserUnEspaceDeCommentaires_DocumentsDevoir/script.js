document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour ajouter un commentaire
    function addComment(firstname, comment) {
        let commentList = document.getElementById('comment-list'); // Récupère l'élément de la liste des commentaires
        let newComment = document.createElement('div'); // Crée un nouvel élément div pour le commentaire
        newComment.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500'); // Ajoute des classes CSS pour le style
        newComment.innerHTML = `
            <div class="flex-1 py-10 border-t border-gray-200">
                <h3 class="font-medium text-gray-900">${firstname}</h3>
                <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                    <p>${comment}</p>
                </div>
            </div>`;
        commentList.appendChild(newComment); // Ajoute le nouveau commentaire à la liste des commentaires
    }

    // Gestion de l'envoi du formulaire
    const commentForm = document.getElementById('commentForm'); // Récupère le formulaire de commentaire
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire

        // Récupère les valeurs des champs du formulaire
        const firstname = document.getElementById('first-name').value;
        const comment = document.getElementById('comment').value;

        // Ajoute le nouveau commentaire
        addComment(firstname, comment);

       // Réinitialise le formulaire
        commentForm.reset(); // Réinitialise le formulaire après l'envoi
    });
});
