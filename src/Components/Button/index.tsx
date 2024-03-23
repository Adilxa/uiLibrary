import * as S from './styles';
import useThemeMode from '../../hooks/useThemeMode';

function Button() {

    const { theme } = useThemeMode();



    return (
        <S.Button style={{ background: theme }}>
            hello world
        </S.Button>
    )
}

export default Button