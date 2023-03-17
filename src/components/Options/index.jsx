import style from './option.module.scss';

export default function Option(props) {

  const {
    options = [{
      valor: 'user',
      label: 'Selecione',
    }],
    valor, 
    idSelect,
    aoAlterado
  } = props

  const aoMudarOption = (event) => {
    aoAlterado(event.target.value)
  }

  return (
    <select className={style.select} name={idSelect} id={idSelect} onChange={aoMudarOption} >
      <option className={style.select__option} value='user' defaultChecked>Selecione</option>
      {options.map(op => {
        return (
          <option key={op.valor} className={style.select__option} value={op.valor}>{op.label}</option>
        )
      })}
    </select>
  )
}