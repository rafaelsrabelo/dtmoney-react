import Modal from "react-modal";
import { FormEvent, useState } from "react";
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { api } from "../../services/api";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen,onRequestClose}: NewTransactionModalProps) {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    function handleNewTransaction (event: FormEvent) {
        event.preventDefault();

        const data = {
            title,
            value,
            category,
            type
        };

        api.post('/transactions', data)
    }

    function handleSetTypeDeposit() {
        setType('deposit')
    }

    function handleSetTypeWitdraw() {
        setType('witdraw')
    }

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button type="button" onClick={onRequestClose} className="react-modal-close">
            <img src={closeImg} alt="Fechar modal" />
        </button>

        <Container onSubmit={handleNewTransaction}>
            <h2>Cadastrar transação</h2>

            <input type="text" placeholder="Título" 
            value={title} onChange={event => setTitle(event.target.value)} 
            />

            <input type="number" placeholder="Valor" 
            value={value} onChange={event => setValue(Number(event.target.value))} 
            />

            <TransactionTypeContainer>
                <RadioBox 
                    type="button" 
                    onClick={handleSetTypeDeposit}
                    isActive={type === 'deposit'}
                    activeColor="green"
                    >
                    <img src={income} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>
                <RadioBox 
                    type="button" onClick={handleSetTypeWitdraw}
                    isActive={type === 'witdraw'}
                    activeColor="red"
                    >
                    <img src={outcome} alt="Saída " />
                    <span>Saída</span> 
                </RadioBox>
            </TransactionTypeContainer>

            <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />

            <button type="submit">
                Cadastrar
            </button>
        </Container>
      </Modal>
    )
}