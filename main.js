
  const boton = document.getElementById('toggleCategorias');
  const lista = document.getElementById('listaCategorias');
  const flecha = document.getElementById('flecha');

  boton.addEventListener('click', () => {
    lista.classList.toggle('oculto');

    // Cambia flecha según el estado
    if (lista.classList.contains('oculto')) {
      flecha.textContent = 'expand_more';
    } else {
      flecha.textContent = 'keyboard_control_key';
    }
  });

