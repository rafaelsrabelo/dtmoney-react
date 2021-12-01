import Modal from "react-modal";
import { FormEvent, useState, useContext } from "react";
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import { useTransaction } from "../../hooks/useTransactions";
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen,onRequestClose}: NewTransactionModalProps) {
    const { createdTransaction } = useTransaction();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    async function handleNewTransaction (event: FormEvent) {
        event.preventDefault();


        await createdTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }

    function handleSetTypeDeposit() {
        setType('deposit')
    }

    function handleSetTypewithDraw() {
        setType('withdraw')
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
            value={amount} onChange={event => setAmount(Number(event.target.value))} 
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
                    type="button" onClick={handleSetTypewithDraw}
                    isActive={type === 'withdraw'}
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