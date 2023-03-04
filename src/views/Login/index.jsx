import Form from '../../components/Formulario';
import pngCapa from '../../assets/images/3dbusiness.png';
import style from './login.module.scss';

export default function Login() {
  return (
    <div className={style.viewLogin}>
      <div className={style.viewLogin__form}>
        <Form />
      </div>
      <div className={style.viewLogin__img}>
        <img src={pngCapa} alt="duas pessoas conversando" />
      </div>
    </div>
  )
}