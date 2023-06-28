import { createContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Loader } from "../spinner/loader";

const ProductContext = createContext();

export const AppProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [roomList, setRoomList] = useState({});
  const [click, setClick] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState();
  const [chatHeader, setChatHeader] = useState("Login" | "");
  const [rooms, setRooms] = useState();
  const [userInfo, setUserInfo] = useState();
  const [userId, setUserId] = useState("" | null);
  const [room, setRoom] = useState([]);
  const [message, setMessage] = useState();
  const [room_Id, setRoom_Id] = useState("");
  const [roomsId, setRoomsId] = useState();
  const [orgId, setOrgId] = useState("");
  const [Id, setId] = useState("");

  let [searchParams, setSearchParams] = useSearchParams();

  const sessionId = {
    session_id: "4sjl7vrpycwauvueewhqrme0u5vqnnmj",
    // session_id: "5p8do0ht7no4gyjo0w2984o4vj5dc2hs",
  };
  // const cachedSessionId = useMemo(() => sessionId, [sessionId]);
  const params = Object.fromEntries([...searchParams]);
  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    // console.log(currentParams);
    setSearchParams(sessionId);
  });
  useEffect(() => {
    const getSessionId = async () => {
      const res = await axios.post(
        "https://100093.pythonanywhere.com/api/userinfo/",
        searchParams
      );
      // console.log("res.data", res);
      setOrgId(res?.data?.selected_product?.orgid);
      // setUserInfo(res?.data?.userinfo);
    };
    getSessionId();
  }, [searchParams]);
  useEffect(() => {
    const getSessionIds = async () => {
      const res = await axios.post(
        "https://100093.pythonanywhere.com/api/userinfo/",
        {
          session_id: Id,
        }
      );
      setUserInfo(res?.data?.userinfo);
    };
    getSessionIds();
  }, [Id]);
  // create Room UseEffect
  useEffect(() => {
    const createRooms = async () => {
      const res = await axios.get(
        `https://100096.pythonanywhere.com/create-portfolio/?session_id=4sjl7vrpycwauvueewhqrme0u5vqnnmj`
      );
      console.log("createRoom response", res);
      setUserId(res?.data?.portfolio?.userID);
    };
    createRooms();
  }, []);

  useEffect(() => {
    const getRooms = async (title) => {
      try {
        const BASE_URL = `https://100096.pythonanywhere.com/room_list/${chatHeader}/${orgId}/`;
        setLoading(true);
        const res = await axios.get(BASE_URL);
        setRooms(res?.data);
        setLoading(false);
      } catch (error) {
        console.error("error", error);
      }
    };
    getRooms();
  }, [chatHeader, orgId]);

  useEffect(() => {
    const url = `https://100096.pythonanywhere.com/send_message/${room_Id}/`;
    const getMessages = async () => {
      setLoading(true);
      const res = await axios.get(url);
      setId(res?.data?.messages?.[1]?.author?.session_id);
      setMessages(res?.data);
      setLoading(false);
    };
    getMessages();
  }, [messages]);

  //create a usememo for the messages data
  const memorizedMessages = useMemo(() => messages, [messages]);
  const memorizedRooms = useMemo(() => rooms, [rooms]);

  useEffect(() => {
    axios
      .get(`https://100096.pythonanywhere.com/admin_product_list/`)
      .then((res) => {
        // console.log("getting products", productList);
        setProductList(res.data.product_list);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  useEffect(() => {
    const clientProductList = async () => {
      const res = await axios.get(
        "https://100096.pythonanywhere.com/client_product_list"
      );
      // console.log(productList, res);
    };
    clientProductList();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productList,
        message,
        messages,
        roomList,
        click,
        setClick,
        chatHeader,
        setChatHeader,
        rooms,
        setRooms,
        room,
        setRoom_Id,
        room_Id,
        userInfo,
        sessionId,
        searchParams,
        loading,
        memorizedMessages,
        memorizedRooms,
        orgId,
        userId,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
