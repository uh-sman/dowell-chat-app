import { createContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const ProductContext = createContext();

export const AppProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [roomList, setRoomList] = useState({});
  const [click, setClick] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState();
  const [chatHeader, setChatHeader] = useState("");
  const [rooms, setRooms] = useState();
  const [userInfo, setUserInfo] = useState();
  const [room, setRoom] = useState([]);
  const [message, setMessage] = useState();
  const [room_Id, setRoom_Id] = useState("");
  const [roomsId, setRoomsId] = useState();
  const [orgId, setOrgId] = useState("");

  let [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams);

  const sessionId = {
    session_id: "5p8do0ht7no4gyjo0w2984o4vj5dc2hs",
  };
  // const cachedSessionId = useMemo(() => sessionId, [sessionId]);
  const params = Object.fromEntries([...searchParams]);
  console.log("mounted", params);
  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    console.log(currentParams);
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
      setUserInfo(res?.data?.userinfo);
    };
    getSessionId();
  }, [searchParams]);

  // create Room UseEffect
  // useEffect(() => {
  //   const createRooms = async () => {
  //     const res = await axios.get(
  //       `https://100096.pythonanywhere.com/dowell-api/create-room/Login/?${sessionId}`
  //     );
  //     console.log("createRoom response", res, res.status);
  //   };
  //   createRooms();
  // }, [sessionId]);

  useEffect(() => {
    const getRooms = async (title) => {
      try {
        const BASE_URL = `https://100096.pythonanywhere.com/room_list/${chatHeader}/${orgId}/`;
        setLoading(true);
        const res = await axios.get(BASE_URL);

        // console.log(`res.data from messages${chatHeader}`, res?.data?.messages);
        // console.log(`res.data from messages${chatHeader}`, res?.data);
        // console.log("response from get rooms", res?.data);
        setRooms(res?.data);
        // setMessages(res)
        console.log(res?.data?.userinfo.session_id);
        setRoom(res?.data);
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
      console.log("response", res?.data);
      setMessages(res?.data);
      setLoading(false);
    };
    getMessages();
  }, [room_Id]);

  //create a usememo for the messages data
  const memorizedMessages = useMemo(() => messages, [messages]);
  const memorizedRooms = useMemo(() => rooms, [rooms]);
  console.log("memoized", memorizedMessages, memorizedRooms);
  // useEffect(() => {
  //   const getSessionId = async () => {
  //     try {

  //       const res = await axios.get("https://100096.pythonanywhere.com/");

  //       console.log(res);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   getSessionId();
  // }, []);

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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
