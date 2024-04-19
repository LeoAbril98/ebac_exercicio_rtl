import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve comentar "Muito legal!" nos comentários', () => {
        render(<PostComment />);
        fireEvent.change(screen.getByTestId('textarea-comment'), {
            target: {
                value: 'Muito legal!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-submit'))
        expect(screen.getByText('Muito massa!')).toBeInTheDocument()
    })

    test('Deve comentar "Gosto mais do Spiderman!" nos comentários', () => {
        render(<PostComment />);
        fireEvent.change(screen.getByTestId('textarea-comment'), {
            target: {
                value: 'Gosto mais do Spiderman!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-submit'))
        expect(screen.getByText('Gosto mais do Spiderman!')).toBeInTheDocument()
    })
});