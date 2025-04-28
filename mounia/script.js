let timerInterval;
let startTime;



 const quizzes = {
   
    javascript: [
        { question: "Quel mot-clé déclare une constante en JavaScript ?", options: ["const", "let", "var", "static"], answer: "const" },
        { question: "Comment vérifier le type d'une variable ?", options: ["typeof", "type", "instanceof", "varType"], answer: "typeof" },
        { question: "Que retourne '2' + 3 en JavaScript ?", options: ["5", "23", "Erreur", "undefined"], answer: "23" },
        { question: "Quelle méthode transforme un objet en JSON ?", options: ["JSON.stringify()", "JSON.parse()", "JSON.objectify()", "JSON.create()"], answer: "JSON.stringify()" },
        { question: "Comment définir une fonction fléchée ?", options: ["() => {}", "function() {}", "() => []", "func -> {}"], answer: "() => {}" },
        { question: "Quelle méthode ajoute à la fin d'un tableau ?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()" },
        { question: "Comment faire une boucle sur un tableau ?", options: ["forEach()", "map()", "for...of", "Toutes"], answer: "Toutes" },
        { question: "Que retourne NaN == NaN ?", options: ["true", "false", "Erreur", "undefined"], answer: "false" },
        { question: "Quelle fonction attend une certaine durée avant d'exécuter ?", options: ["setTimeout()", "setInterval()", "delay()", "sleep()"], answer: "setTimeout()" },
        { question: "Quelle valeur est fausse ?", options: ["false", "0", "''", "Tous"], answer: "Tous" },
        { question: "Comment déclarer une classe en JavaScript ?", options: ["class", "function", "object", "struct"], answer: "class" },
        { question: "Quelle est la portée d'une variable let ?", options: ["Bloc", "Fonction", "Globale", "Module"], answer: "Bloc" },
        { question: "Comment arrêter une boucle for ?", options: ["break", "stop", "exit", "quit"], answer: "break" },
        { question: "Quelle est la bonne syntaxe d'un tableau vide ?", options: ["[]", "{}", "()", "empty"], answer: "[]" },
        { question: "Comment convertir un string en nombre ?", options: ["Number()", "parseInt()", "parseFloat()", "Toutes"], answer: "Toutes" },
    ],
    os: [
        { question: "Quel OS est basé sur UNIX ?", options: ["Linux", "Windows", "Android", "MS-DOS"], answer: "Linux" },
        { question: "Quel est le rôle du système d'exploitation ?", options: ["Gérer les ressources", "Gérer les utilisateurs", "Gérer les applications", "Tous"], answer: "Tous" },
        { question: "Exemple de système temps réel ?", options: ["Windows", "VxWorks", "Linux", "MacOS"], answer: "VxWorks" },
        { question: "Que gère la mémoire virtuelle ?", options: ["Processus", "Stockage", "Mémoire principale", "CPU"], answer: "Mémoire principale" },
        { question: "Qu'est-ce qu'un deadlock ?", options: ["Blocage de processus", "Erreur mémoire", "Crash système", "Reboot"], answer: "Blocage de processus" },
        { question: "Exemple de processus léger ?", options: ["Thread", "Processus fils", "Kernel", "Daemon"], answer: "Thread" },
        { question: "Que signifie 'boot' ?", options: ["Lancer le système", "Éteindre", "Redémarrer", "Formater"], answer: "Lancer le système" },
        { question: "Où se trouve le BIOS ?", options: ["ROM", "RAM", "Disque", "Cache"], answer: "ROM" },
        { question: "Extension fichier Linux executable ?", options: [".out", ".exe", ".bat", ".cmd"], answer: ".out" },
        { question: "Système multi-utilisateur ?", options: ["UNIX", "Windows 95", "MS-DOS", "Palm OS"], answer: "UNIX" },
        { question: "Commande Linux pour voir les fichiers ?", options: ["ls", "cd", "mkdir", "rm"], answer: "ls" },
        { question: "Lequel est un OS mobile ?", options: ["iOS", "Windows 10", "Linux Mint", "Fedora"], answer: "iOS" },
        { question: "Que fait un ordonnanceur ?", options: ["Gère les processus", "Gère les fichiers", "Gère la mémoire", "Gère les imprimantes"], answer: "Gère les processus" },
        { question: "Exemple de mémoire volatile ?", options: ["RAM", "Disque dur", "CD-ROM", "Clé USB"], answer: "RAM" },
        { question: "Que veut dire GUI ?", options: ["Interface Graphique", "Processeur Graphique", "Utilitaire système", "Interface réseau"], answer: "Interface Graphique" },
    ],
    datastructures: [
        { question: "Structure LIFO ?", options: ["Pile", "File", "Tableau", "Arbre"], answer: "Pile" },
        { question: "Structure FIFO ?", options: ["Pile", "File", "Arbre", "Graph"], answer: "File" },
        { question: "Complexité recherche binaire ?", options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"], answer: "O(log n)" },
        { question: "Arbre binaire de recherche ?", options: ["BST", "Heap", "Graph", "Trie"], answer: "BST" },
        { question: "Que fait une file de priorité ?", options: ["Traite selon priorité", "Traite premier arrivé", "Trie", "Ajoute"], answer: "Traite selon priorité" },
        { question: "Type de graphe sans cycle ?", options: ["Arbre", "Graph orienté", "Graph complet", "Aucun"], answer: "Arbre" },
        { question: "Insertion rapide ?", options: ["Tableau", "Liste chaînée", "Pile", "Heap"], answer: "Liste chaînée" },
        { question: "Suppression rapide tête ?", options: ["Liste chaînée", "Pile", "File", "Tableau"], answer: "Liste chaînée" },
        { question: "Trie plus rapide en moyenne ?", options: ["QuickSort", "BubbleSort", "SelectionSort", "InsertionSort"], answer: "QuickSort" },
        { question: "Quelle est la complexité de MergeSort ?", options: ["O(n log n)", "O(n²)", "O(log n)", "O(1)"], answer: "O(n log n)" },
        { question: "Traversée préfixe arbre ?", options: ["Racine → Gauche → Droite", "Gauche → Droite → Racine", "Droite → Racine → Gauche", "Racine → Droite → Gauche"], answer: "Racine → Gauche → Droite" },
        { question: "Pile en C++ est basé sur ?", options: ["Array", "List", "Vector", "Queue"], answer: "Vector" },
        { question: "Complexité d'insertion tableau dynamique ?", options: ["O(1) amorti", "O(log n)", "O(n)", "O(n²)"], answer: "O(1) amorti" },
        { question: "Utilité d'une table de hachage ?", options: ["Accès rapide", "Trier", "Stocker séquentiel", "Compresser"], answer: "Accès rapide" },
        { question: "Quelle structure pour implémenter BFS ?", options: ["File", "Pile", "Liste", "Arbre"], answer: "File" },
    ],
    cpp: [
        { question: "Extension des fichiers C++ ?", options: [".cpp", ".c", ".h", ".hpp"], answer: ".cpp" },
        { question: "Mot-clé pour allouer mémoire dynamique ?", options: ["new", "malloc", "alloc", "create"], answer: "new" },
        { question: "Mot-clé pour libérer mémoire ?", options: ["delete", "free", "remove", "deallocate"], answer: "delete" },
        { question: "Que signifie OOP ?", options: ["Programmation Orientée Objet", "Programmation Ordonnée", "Opération Objectif", "Optimisation Objet"], answer: "Programmation Orientée Objet" },
        { question: "Quel mot-clé est utilisé pour l'héritage ?", options: ["public", "private", "protected", "tous"], answer: "tous" },
        { question: "Déclaration de classe correcte ?", options: ["class Nom {}", "Nom class {}", "Nom::class {}", "struct class {}"], answer: "class Nom {}" },
        { question: "Constructeur par défaut est ?", options: ["Sans paramètres", "Avec paramètres", "Copie", "Dynamique"], answer: "Sans paramètres" },
        { question: "Opérateur pour accéder au membre ?", options: [".", ":", "::", "->"], answer: "." },
        { question: "Que fait l'opérateur '->' ?", options: ["Accède membre via pointeur", "Multiplie", "Divise", "Déplace"], answer: "Accède membre via pointeur" },
        { question: "Un destructeur commence par ?", options: ["~", "!", "#", "&"], answer: "~" },
        { question: "Comment éviter la fuite mémoire ?", options: ["delete", "free", "clear", "close"], answer: "delete" },
        { question: "C++ est un langage ?", options: ["Compilé", "Interprété", "Script", "Binaire"], answer: "Compilé" },
        { question: "Classe virtuelle pure a ?", options: ["= 0", "= null", "= none", "= 1"], answer: "= 0" },
        { question: "Bibliothèque standard en C++ ?", options: ["STL", "SDL", "SWT", "SVT"], answer: "STL" },
        { question: "std::vector est ?", options: ["Tableau dynamique", "Pile", "Queue", "Map"], answer: "Tableau dynamique" },
    ],
    sql: [
        { question: "Commande pour sélectionner ?", options: ["SELECT", "INSERT", "DELETE", "UPDATE"], answer: "SELECT" },
        { question: "Mot-clé pour ajouter données ?", options: ["INSERT", "ADD", "PUT", "POST"], answer: "INSERT" },
        { question: "Mot-clé pour modifier une table ?", options: ["ALTER", "CHANGE", "UPDATE", "MODIFY"], answer: "ALTER" },
        { question: "Commande pour effacer une table ?", options: ["DROP", "DELETE", "REMOVE", "CLEAR"], answer: "DROP" },
        { question: "SQL signifie ?", options: ["Structured Query Language", "Simple Query Logic", "Sequential Query Language", "System Query List"], answer: "Structured Query Language" },
        { question: "Filtrer avec ?", options: ["WHERE", "HAVING", "ORDER", "GROUP"], answer: "WHERE" },
        { question: "Trier avec ?", options: ["ORDER BY", "GROUP BY", "SORT BY", "FILTER"], answer: "ORDER BY" },
        { question: "Supprimer doublons avec ?", options: ["DISTINCT", "UNIQUE", "ONLY", "FILTER"], answer: "DISTINCT" },
        { question: "Faire une jointure simple ?", options: ["INNER JOIN", "OUTER JOIN", "FULL JOIN", "CROSS JOIN"], answer: "INNER JOIN" },
        { question: "Compter lignes ?", options: ["COUNT()", "SUM()", "TOTAL()", "NUMBER()"], answer: "COUNT()" },
        { question: "Moyenne d'une colonne ?", options: ["AVG()", "SUM()", "COUNT()", "MAX()"], answer: "AVG()" },
        { question: "La clé primaire est ?", options: ["Unique", "Dupliqué", "Optionnel", "Inutile"], answer: "Unique" },
        { question: "Quelle commande supprime données ?", options: ["DELETE", "DROP", "REMOVE", "CLEAN"], answer: "DELETE" },
        { question: "Mot-clé pour grouper résultats ?", options: ["GROUP BY", "ORDER BY", "GATHER", "SORT"], answer: "GROUP BY" },
        { question: "Base de données est ?", options: ["Collection de tables", "Un tableau", "Un fichier", "Un programme"], answer: "Collection de tables" },
    ]
};

let currentQuiz = [];
let currentQuestion = 0;
let score = 0;

function startQuiz(subject) {
    currentQuiz = quizzes[subject];
    currentQuestion = 0;
    score = 0;
    startTime = Date.now(); // 🕒 démarrer le chrono
    timerInterval = setInterval(updateTimer, 1000); // mettre à jour toutes les secondes
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    loadQuestion();
}


function loadQuestion() {
    const questionObj = currentQuiz[currentQuestion];
    document.getElementById('question').innerText = `Q${currentQuestion + 1}: ${questionObj.question}`;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    questionObj.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => selectAnswer(option);
        optionsDiv.appendChild(button);
    });

    document.getElementById('skip-btn').style.display = 'block'; // afficher skip au début
    document.getElementById('next-btn').style.display = 'block'; // cacher suivant au début
}

function selectAnswer(selected) {
    const correct = currentQuiz[currentQuestion].answer;
    if (selected === correct) {
        score++;
    }
    document.getElementById('next-btn').style.display = 'block';
    document.getElementById('skip-btn').style.display = 'none'; // cacher le skip après réponse
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-btn').style.display = 'none';
    if (currentQuestion < currentQuiz.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    clearInterval(timerInterval); // 🛑 arrêter le chrono

    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    
    let resultText = `Votre score est ${score} / ${currentQuiz.length}\n`;

    if (score === currentQuiz.length) {
        resultText += "🏆 Parfait ! Score parfait ! (OR)";
        document.getElementById('result-screen').style.backgroundColor = "#ffd700"; // OR
    } else if (score >= 13) {
        resultText += "🥇 Excellent ! (OR)";
        document.getElementById('result-screen').style.backgroundColor = "#ffd700"; // OR
    } else if (score >= 9) {
        resultText += "🥈 Très bien ! (ARGENT)";
        document.getElementById('result-screen').style.backgroundColor = "#c0c0c0"; // ARGENT
    } else {
        resultText += "🥉 Courage ! (BRONZE)";
        document.getElementById('result-screen').style.backgroundColor = "#cd7f32"; // BRONZE
    }

    let elapsed = Math.floor((Date.now() - startTime) / 1000);
    let minutes = Math.floor(elapsed / 60);
    let seconds = elapsed % 60;
    resultText += `\nTemps total : ${minutes}m ${seconds}s`;

    document.getElementById('result').innerText = resultText;
}

function restart() {
    document.getElementById('result-screen').style.display = 'none'; // cacher l'écran de résultat
    document.getElementById('start-screen').style.display = 'block'; // afficher l'écran de choix
    document.getElementById('result-screen').style.backgroundColor = 'white'; // reset la couleur de fond
}
function updateTimer() {
    const now = Date.now();
    const elapsed = Math.floor((now - startTime) / 1000); // en secondes
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    document.getElementById('timer').innerText = `⏱️ Temps : ${minutes}m ${seconds}s`;
}
function skipQuestion() {
    currentQuestion++;
    if (currentQuestion < currentQuiz.length) {
        loadQuestion();
    } else {
        showResult();
    }
}