import { useRecoilState } from 'recoil';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { formState , notesState , updateState } from '../stateStore/atoms';
import axios from "axios";

export function useFormManip() {
  const [formValues , setFormValues] = useRecoilState(formState);

  const updateFormValue = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value, // if it seems tough Ref:Code bless You YT handling complex inputs
    });
  };

  return{
    formValues,
    updateFormValue
  };
};

export function useCreateNote(){
  const [formValues , setFormValues] = useRecoilState(formState);
  const [notes, setNotes] = useRecoilState(notesState);

  const createNote = async (e) => {
    e.preventDefault();
    //Create Note
    const res = await axios.post(`${API_BASE_URL}/notes`, formValues,{withCredentials:true});

    //update the state about new Note included
   
      setNotes([...notes, res.data.note]);
    
  
    //clear input values after adding
    setFormValues({ title: "", body: "" });

    console.log("Submit");
  };
  return{
    formValues,
    notes,
    createNote
  }
}