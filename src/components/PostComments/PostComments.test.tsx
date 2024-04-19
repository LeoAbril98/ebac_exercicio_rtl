import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve comentar "Muito massa!" nos comentários', () => {
        render(<PostComment />);
        fireEvent.change(screen.getByTestId('textarea-comment'), {
            target: {
                value: 'Muito massa!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-submit'))
        expect(screen.getByText('Muito massa!')).toBeInTheDocument()
    })

    test('Deve comentar "Sou mais o Spiderman! Hahaha" nos comentários', () => {
        render(<PostComment />);
        fireEvent.change(screen.getByTestId('textarea-comment'), {
            target: {
                value: 'Sou mais o Spiderman! Hahah'
            }
        })
        fireEvent.click(screen.getByTestId('btn-submit'))
        expect(screen.getByText('Sou mais o Spiderman! Hahah')).toBeInTheDocument()
    })
});