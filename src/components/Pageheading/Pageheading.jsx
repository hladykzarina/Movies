import s from './Pageheading.module.css';

export default function PageHeading({ text }) {
  return <h1 className={s.title}>{text}</h1>;
}
