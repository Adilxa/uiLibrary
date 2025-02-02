import * as S from './styles';

interface ThemeTogglerProps {
    themeToggler: () => void;
}

function TogglerButton({ themeToggler }: ThemeTogglerProps) {
    return (
        <S.Container>
            <label htmlFor="checkbox" className="switch">
                <input
                    id="checkbox"
                    type="checkbox"
                    onClick={themeToggler}
                    onChange={() => false}
                    checked={window.localStorage.getItem('theme') === 'light'}
                />
                <S.Icons className="slider round">
                    {window.localStorage.getItem('theme') !== 'light' ? (
                        <>
                            {/* <h1>light</h1> */}
                        </>
                    ) : (
                        <>
                            {/* <h1>dark</h1> */}
                        </>
                    )}
                </S.Icons>
            </label>
        </S.Container>
    );
}

export default TogglerButton;