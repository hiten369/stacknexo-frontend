import Home from './Components/Home/Home';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import ScrollTop from './CommonElements/ScrollTop';
import Login from './SideBar/Authentication/layouts/dark/LogIn';
import SignUp from './SideBar/Authentication/layouts/dark/SignUp';
import PasswordReset from './SideBar/Authentication/layouts/dark/PasswordReset';
import MainState from './context/MainState';
import Alert from './Alert/Alert';
import { useEffect, useState } from 'react';
import VerifyEmail from './SideBar/Authentication/general/VerifyEmail';
import CryptoJS from 'crypto-js';
import Wiz6 from './SideBar/Authentication/extended/Wiz6';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Logout from './Logout';
import Session from './Session';
import Text from './Text';
import Editor2 from './Editor/Editor2';
import Offline1 from './Offline1';
import EditorMain from './Editor/EditorMain';
import Error404 from './Error404';
import WebSocketHandler from './WebSocket/WebSocketHandler';
import TestPage from './TestPage';
import ArticleCategories from './Editor/ArticleCategories';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditorState from './context/EditorState';
import Overview from './Editor/Overview';
import DrawerChat from './CommonElements/DrawerChat1';

// import Navbar from './Navbar/Navbar'
// import Aside from './Aside/Aside'
// import Activities from './CommonElements/Activities';
// import EngageDemos from './CommonElements/EngageDemos';
// import CreateAppModal from './CommonElements/CreateAppModal';
// import UserSearchModal from './CommonElements/UserSearchModal';
// import InviteFriendModal from './CommonElements/InviteFriendModal';

const App = () => {
  const [color, setColor] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [load, setLoad] = useState(false);

  const dismissNoti = async (id) => {
    const response = await fetch(`/notification/putNotification/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
      },
      body: JSON.stringify({ notiStatus: 'Read' })
    });
    const data = await response.json();
    console.log(data);
    toast.dismiss();
  };

  const notify = (noti) => {
    if (noti.type === 'info') {
      toast.info(
        <div>
          <b className="noti-title">{noti.title}</b>
          <p className="noti-desc">{noti.desc}</p>
          <p onClick={() => {
            dismissNoti(noti.id);
          }} className="noti-footer">Mark as read</p>
        </div>, {
        theme: 'dark',
        className: "noti-main"
      });
    }
    else if (noti.type === 'success') {
      toast.success(
        <div>
          <b className="noti-title">{noti.title}</b>
          <p className="noti-desc">{noti.desc}</p>
          <p onClick={() => {
            dismissNoti(noti.id);
          }} className="noti-footer">Mark as read</p>
        </div>, {
        theme: 'dark',
        className: "noti-main"
      });
    }
    else if (noti.type === 'warning') {
      toast.warning(
        <div>
          <b className="noti-title">{noti.title}</b>
          <p className="noti-desc">{noti.desc}</p>
          <p onClick={() => {
            dismissNoti(noti.id);
          }} className="noti-footer">Mark as read</p>
        </div>, {
        theme: 'dark',
        className: "noti-main"
      });
    }
    else {
      toast.error(
        <div>
          <b className="noti-title">{noti.title}</b>
          <p className="noti-desc">{noti.desc}</p>
          <p onClick={() => {
            dismissNoti(noti.id);
          }} className="noti-footer">Mark as read</p>
        </div>, {
        theme: 'dark',
        className: "noti-main"
      });
    }
  };

  // Authenticating the user
  const checkUser = () => {
    if (window.location.pathname !== "/login") {
      const itemStr = localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8');
      if (!itemStr) {
        localStorage.removeItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8');
        window.location.href = '/login';
      }

      const item = JSON.parse(itemStr);
      const now = new Date();
      if (now.getTime() > item.expiry) {
        localStorage.removeItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8');
        window.location.href = '/login';
      }
    }
  };

  // Authenticating the user
  useEffect(() => {
    checkUser();
  }, []);

  // Trigger alert
  const setAlert = (color, message) => {
    setColor(color);
    setMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3500);
  };

  // Decryption 
  const decrypt1 = (str) => {
    let str1 = str.replace(/Por21Ld/g, '/');
    var bytes = CryptoJS.AES.decrypt(str1, 'hit36');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  };

  // Encryption
  const encrypt1 = (str) => {
    var ciphertext = CryptoJS.AES.encrypt(str, 'hit36').toString().replace(/\//g, 'Por21Ld');
    return ciphertext;
  };

  // Loader
  const setLoad1 = (flag) => {
    setLoad(flag);
  };

  return (
    <>
      <MainState setLoad1={setLoad1}>
        <EditorState>

          {/* Handle Web Socket */}
          <WebSocketHandler setAlert={setAlert} />

          {/* Alert Bar */}
          {showAlert ? <Alert color={color} message={message} /> : null}

          {/* Message Toasts (Popups) */}
          <ToastContainer
            position="bottom-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

          <Routes>
            <Route path="/" element={<Home setAlert={setAlert} notify={notify} encrypt={encrypt1} />} />
            <Route path="/login" element={<Login encrypt={encrypt1} setAlert={setAlert} />} />
            <Route path="/signin" element={<SignUp setAlert={setAlert} encrypt={encrypt1} />} />
            <Route path="/passwordReset" element={<PasswordReset setAlert={setAlert} encrypt={encrypt1} />} />
            <Route path="/2fa" element={<Wiz6 setAlert={setAlert} encrypt={encrypt1} />} />
            <Route path="/verifyEmail/:email" element={<VerifyEmail decrypt={decrypt1} setAlert={setAlert} encrypt={encrypt1} />} />
            <Route path="/verifyEmail/:email/:otp" element={<VerifyEmail decrypt={decrypt1} setAlert={setAlert} />} />
            <Route path="/chart1" element={<Chart1 />} />
            <Route path="/chart2" element={<Chart2 />} />
            <Route path="/logout" element={<Logout setAlert={setAlert} />} />
            <Route path="/session" element={<Session setLoad1={setLoad1} load={load} setAlert={setAlert} encrypt={encrypt1} />} />
            <Route path="/text" element={<Text notify={notify} setAlert={setAlert} load={load} encrypt={encrypt1} />} />
            <Route path="/offline" element={<Offline1 />} />
            <Route path="/not_found" element={<Error404 />} />
            <Route path="/editor2" element={<EditorMain notify={notify} load={load} setAlert={setAlert} encrypt={encrypt1} />} />
            <Route path="/editor2/:articleId" element={<Editor2 notify={notify} load={load} setAlert={setAlert} />} />
            <Route path="/editor2/:articleId/overview" element={<Overview notify={notify} load={load} setLoad={setLoad} setAlert={setAlert} />} />
            <Route path="/test" element={<TestPage load={load} setAlert={setAlert} />} />
            <Route path="/articleCategories" element={<ArticleCategories notify={notify} load={load} encrypt={encrypt1} setAlert={setAlert} />} />
            {/* <Route path="/editor/:articleId" element={<Editor1 setAlert={setAlert} />} /> */}
            {/* <Route path="/editor1" element={<EditorTest setAlert={setAlert} />} /> */}
          </Routes>

          <ScrollTop />
          {/* <Activities /> */}
          <DrawerChat />
          {/* <EngageDemos /> */}
          {/* <UserSearchModal /> */}
          {/* <InviteFriendModal /> */}
        </EditorState>
      </MainState>
    </>
  );
};

export default App;
