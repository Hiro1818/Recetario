function createCommentForm() {
    const commentFormContainer = document.getElementById("commentFormContainer");

    const form = document.createElement("form");
    form.id = "commentForm";

    const formGroup1 = createFormGroup("Nombre:", "nombre", "text", true);
    form.appendChild(formGroup1);

    const formGroup2 = createFormGroup("Correo electrónico:", "email", "email", true);
    form.appendChild(formGroup2);

    const formGroup3 = createFormGroup("Comentario:", "comentario", "textarea", true);
    form.appendChild(formGroup3);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Enviar";
    form.appendChild(submitButton);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("¡Comentario enviado!");
    });

    commentFormContainer.appendChild(form);
}

// Función para crear un grupo de formulario
function createFormGroup(labelText, inputName, inputType, isRequired) {
    const formGroup = document.createElement("div");
    formGroup.classList.add("form-group");

    const label = document.createElement("label");
    label.textContent = labelText;

    const input = document.createElement(inputType === "textarea" ? "textarea" : "input");
    input.name = inputName;
    input.type = inputType;
    if (isRequired) {
        input.required = true;
    }

    formGroup.appendChild(label);
    formGroup.appendChild(input);

    return formGroup;
}

// Llama a la función para crear el formulario cuando se carga la página
window.addEventListener("load", createCommentForm);