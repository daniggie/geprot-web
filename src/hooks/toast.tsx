import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const MenssagemSucesso = (menssagem: string) => {
  toast.success(menssagem)
}

export const MenssagemErro = (menssagem: string) => {
  toast.warn(menssagem)
}

export const MenssagemInfo = (menssagem: string) => {
  toast.info(menssagem)
}