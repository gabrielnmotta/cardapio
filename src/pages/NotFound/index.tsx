import style from './NotFound.module.scss';
import { ReactComponent as NotFoundImage} from 'assets/not_found.svg';

export default function NotFound(){
  return(
    <div>
      <NotFoundImage/>
    </div>
  );
}