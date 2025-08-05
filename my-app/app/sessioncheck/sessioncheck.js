import { loginButton } from "@/store/reducers/user";
import { setLoading } from "@/store/reducers/user";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Session({children}){
    let router = useRouter();
    let dispatch = useDispatch();
   useEffect(() => {
  dispatch(setLoading('LoadingStart'));

  const token = localStorage.getItem('mytoken');

  // Prevent calling API with invalid token
  if (!token || typeof token !== 'string') {
    dispatch(setLoading('LoadingEnd'));
    router.push('/login');
    return;
  }

  axios.post('/api/auth', {
    action: 'checkSession',
    token: token
  })
    .then((resp) => {
      dispatch(setLoading('LoadingEnd'));

      if (!resp.data) {
        router.push('/login');
      } else {
        dispatch(loginButton(resp.data));
      }
    })
    .catch((err) => {
      console.error("Session check failed:", err);
      dispatch(setLoading('LoadingEnd'));
      router.push('/login');
    });
}, []);

        return <div>

        {children}

    </div>

}