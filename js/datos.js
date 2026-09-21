.nota-personal {
    background-color: #FBEFF3;
    border-left: 3px solid var(--rosa-empolvado);
    padding: 14px;
    border-radius: 6px;
    margin-top: 10px;
}

.nota-textarea {
    width: 100%;
    min-height: 80px;
    margin-top: 8px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid var(--rosa-empolvado);
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    resize: vertical;
    box-sizing: border-box;
}

.nota-acciones {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 8px;
}

.btn-guardar-nota {
    background-color: var(--borgoña);
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.85rem;
    cursor: pointer;
}

.btn-guardar-nota:hover { opacity: 0.9; }

.nota-guardada-msg {
    font-size: 0.85rem;
    color: var(--borgoña);
}
