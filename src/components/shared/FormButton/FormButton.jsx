import css from './formButton.module.css';

export const FormButton = ({ text, type }) => {
  return (
    <button className={css.btn} type={type}>
      {text}
    </button>
  );
};
