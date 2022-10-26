import React, { useState } from 'react'
import MainContext from './MainContext'

const baseUrl="https://stacknexo-backend-app.herokuapp.com";
// const baseUrl="http://localhost:5001";

const MainState = (props) => {
    const [userData, setUserData] = useState({});
    const [countryData, setCountryData] = useState([]);
    const [userArciles, setUserArciles] = useState({});
    const [article, setArticle] = useState({});

    /* ------------ Utility Function ------------ */
    // Validating user session (if expired or not)
    const getWithExpiry = (key) => {
        const itemStr = localStorage.getItem(key)
        if (!itemStr) {
            return false;
        }

        const item = JSON.parse(itemStr)
        const now = new Date()
        if (now.getTime() > item.expiry) {
            localStorage.removeItem(key)
            return false;
        }
        return true;
    };

    /* ------------ User Authentication ------------ */
    // Signin User (Admin will create new users)
    const signin = async (firstName, lastName, email, password, cpassword, dob, designationName, forced2FA, userGroup, ip) => {
        let response = await fetch(`${baseUrl}/user/signin`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            },
            body: JSON.stringify({ firstName, lastName, email, password, cpassword, dob, designationName, forced2FA, userGroup, ip })
        });
        let data = await response.json();
        return data;
    };

    // Login User
    const login = async (email, password, ip) => {
        let response = await fetch(`${baseUrl}/user/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, password, ip })
        });
        let data = await response.json();
        return data;
    };

    // Logout User
    const logout = async (ip) => {
        let resp = await fetch(`${baseUrl}/user/logout`, {
            method: 'POST',
            headers: {
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ip })
        });
        let data = await resp.json();
        // console.log(data);
        return data;
    };

    // Verify New User / Old User (Refresh Token)
    const verifyReft = async (userIp) => {
        const response = await fetch(`${baseUrl}/user/verifyReft?userIp=${userIp}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'reft': JSON.parse(localStorage.getItem('923hufweh8934rbuf3489h348ryc34ry890xcr348efq3we90y')).token
            }
        });
        const data = await response.json();
        // console.log(data);
        return data;
    };

    // Verify Jwt token
    const verifyJwt = async (userIp) => {
        if (getWithExpiry('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')) {
            let response = await fetch(`${baseUrl}/user/verifyJwt?userIp=${userIp}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
                }
            });
            let data = await response.json();
            return data;
        }
        return { flag: false };
        // 1644192342961
        // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWY0MDhlNDJiNzkwZTM0MDgwOWJmOWIiLCJpYXQiOjE2NDQxMDU5NDJ9.2tPj-fdFilMOCYBlqX1rDrnsxhqpY8G2lPWrq2lFbXo
    };

    // Verify The Session
    const verifySession = async (ip) => {
        let response = await fetch(`${baseUrl}/user/verifySession`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'reft': JSON.parse(localStorage.getItem('923hufweh8934rbuf3489h348ryc34ry890xcr348efq3we90y')).token
            },
            body: JSON.stringify({ ip })
        });
        let data = await response.json();
        // console.log(data);
        return data;
    };

    // Email OTP Verification
    const email2fa = async (email, ip) => {
        let resp = await fetch(`${baseUrl}/user/email2fa`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'reft': JSON.parse(localStorage.getItem('923hufweh8934rbuf3489h348ryc34ry890xcr348efq3we90y')).token
            },
            body: JSON.stringify({ email, ip })
        });
        let data = await resp.json();
        console.log(data);
    };

    // Verification of otp by entering it
    const verifyOtp = async (otp, ip, email) => {
        let resp = await fetch(`${baseUrl}/user/verifyOtp`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'reft': JSON.parse(localStorage.getItem('923hufweh8934rbuf3489h348ryc34ry890xcr348efq3we90y')).token
            },
            body: JSON.stringify({ userOtp: otp, ip, email })
        });
        let data = await resp.json();
        return data;
    };

    // verification of otp by email link
    const verifyOtp1 = async (otp, ip, email) => {
        let resp = await fetch(`${baseUrl}/user/verifyOtp/${otp}`, {
            method: 'POST',
            headers: {
                'reft': JSON.parse(localStorage.getItem('923hufweh8934rbuf3489h348ryc34ry890xcr348efq3we90y')).token,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ip, email })
        });
        let data = await resp.json();
        return data;
    };

    // Fetch the information of currently logged in user from backend and save user details to localstorage (stackNUser)
    const userDetail = async (ip) => {
        // props.setLoad1(false);
        let resp = await fetch(`${baseUrl}${baseUrl}/user/userInfo`, {
            method: 'POST',
            headers: {
                'reft': JSON.parse(localStorage.getItem('923hufweh8934rbuf3489h348ryc34ry890xcr348efq3we90y')).token,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ip })
        });
        let data = await resp.json();
        localStorage.setItem('stackNUser', JSON.stringify({
            userId: data.data._id,
            designationName: data.data.designationName,
            dob: data.data.dob,
            email: data.data.email,
            firstName: data.data.firstName,
            forced2FA: data.data.forced2FA,
            lastName: data.data.lastName,
            userGroup: data.data.userGroup,
            userDict: data.data.userDict
        }));
        if (data.success) {
            setUserData(data.data);
        }
        // props.setLoad1(true);
        return data;
    };

    /* ------------ 2 factor authentication ------------ */
    // Generate QR Code for g auth verification
    const genQr = async (ip) => {
        let resp = await fetch(`${baseUrl}/user/generate2`, {
            method: 'POST',
            headers: {
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ip })
        });
        let data = await resp.json();
        console.log(data);
        return data;
    };

    // Verification of user by g auth (2fa verification)
    const verify2 = async (token, ip) => {
        let resp = await fetch(`${baseUrl}/user/verify2`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'reft': JSON.parse(localStorage.getItem('923hufweh8934rbuf3489h348ryc34ry890xcr348efq3we90y')).token
            },
            body: JSON.stringify({ token, ip })
        });
        let data = await resp.json();
        return data;
    };

    // Remove the 2fa authentication (g auth)
    const remove2fa = async (userIp) => {
        let resp = await fetch(`${baseUrl}/user/remove2fa?userIp=${userIp}`, {
            headers: {
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            }
        });
        let data = await resp.json();
        // console.log(data);
        setUserData(data.data);
        return data;
    };

    // Fetch data by country (Analytics)
    const getCountryData = async () => {
        let resp = await fetch(`${baseUrl}/analytics/countryData`, {
            headers: {
                'jwt': JSON.parse(localStorage.getItem('jwt')).value
            }
        });
        let data = await resp.json();
        // console.log(data);
        setCountryData(data);
        return data;
    };

    // Temp (For some testing purpose)
    const ua = async () => {
        let resp = await fetch(`${baseUrl}/user/sessionHistory`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('923hufweh8934rbuf3489h348ryc34ry890xcr348efq3we90y')).token
            }
        });
        let data = await resp.json();
        // console.log(data);
        return data;
    };

    /* ------------ Manage user session ------------ */

    // Get user current session
    const getUserSessions = async () => {
        let resp = await fetch(`${baseUrl}/user/getUserSessions`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('923hufweh8934rbuf3489h348ryc34ry890xcr348efq3we90y')).token
            }
        });
        let data = await resp.json();
        // console.log(data);
        return data;
    };

    // Remove user session
    const removeSession = async (index, userIp) => {
        let resp = await fetch(`${baseUrl}/user/removeSession/${index}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            },
            body: JSON.stringify({ userIp })
        });
        let data = await resp.json();
        console.log(data);
        return data;
    };

    // Remove user's all sessions
    const removeAllSessionByUser = async (userIp) => {
        let resp = await fetch(`${baseUrl}/user/removeAllSessionByUser`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            },
            body: JSON.stringify({ userIp })
        });
        let data = await resp.json();
        console.log(data);
        return data;
    };

    // Get user current session
    const getCurrentSession = async (ip) => {
        let resp = await fetch(`${baseUrl}/user/getCurrentSession`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'reft': JSON.parse(localStorage.getItem('923hufweh8934rbuf3489h348ryc34ry890xcr348efq3we90y')).token
            },
            body: JSON.stringify({ ip })
        });
        let data = await resp.json();
        // console.log(data);
        return data;
    };

    /* ------------ Heartbeat API Section ------------ */
    // Save heartbeat
    const heartBeat = async (pageUrl, userState, currentTab, numberTabs) => {
        try {
            let resp = await fetch(`${baseUrl}/user/heartBeat`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
                },
                body: JSON.stringify({ pageUrl, userState, currentTab, numberTabs })
            });
            let data = await resp.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    // Get last heartbeat by user id
    const lastHeartBeat = async (userId) => {
        let resp = await fetch(`${baseUrl}/user/lastHeartBeatByUser/${userId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            }
        });
        let data = await resp.json();
        return data;
    };

    /* ------------ Article API Section ------------ */
    // Fetch article corresponding to perticular user
    const fetchUserArticles = async (page, perPage, key, order, query, catId, date, mode, userGroup, userIp) => {
        props.setLoad1(false);
        let resp = await fetch(`${baseUrl}/article/userAllArticles?page=${page}&perPage=${perPage}&key=${key}&order=${order}&query=${query}&catId=${catId}&date=${date}&mode=${mode}&userGroup=${userGroup}&delay=1&userIp=${userIp}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            }
        });
        let data = await resp.json();
        setUserArciles(data);
        props.setLoad1(true);
        return data;
    };

    // New Article
    const newArticle = async (userIp) => {
        let resp = await fetch(`${baseUrl}/article/newArticle`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            },
            body: JSON.stringify({ userIp })
        });
        let data = await resp.json();
        // console.log(data);
        return data;
    };

    // Get Version History
    const getVersionHistory = async (articleId, userIp) => {
        let resp = await fetch(`${baseUrl}/article/getVersionHistory/${articleId}?userIp=${userIp}`, {
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            }
        });
        let data = await resp.json();
        return data;
    };

    // Update Article
    const putArticle = async (articleId, articleData, userIp) => {
        let resp = await fetch(`${baseUrl}/article/putArticle/${articleId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            },
            body: JSON.stringify({ articleData, userIp })
        });
        let data = await resp.json();
        console.log(data);
        return data;
    };

    // Get current article detail
    const getArticle = async (articleId, userIp) => {
        props.setLoad1(false);
        let resp = await fetch(`${baseUrl}/article/userArticle/${articleId}/${JSON.parse(localStorage.getItem('stackNUser')).designationName}?userIp=${userIp}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            }
        });
        let data = await resp.json();
        setArticle(data);
        props.setLoad1(true);
        return data;
    };

    // Get current article detail (By Slug) (not in use)
    const getArticleBySlug = async (slug) => {
        props.setLoad1(false);
        let resp = await fetch(`${baseUrl}/article/userArticleBySlug/${slug}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            }
        });
        let data = await resp.json();
        setArticle(data);
        props.setLoad1(true);
        return data;
    };

    // Update article slug by article id
    const updateArticleBySlug = async (articleId, slug, userIp) => {
        props.setLoad1(false);
        let resp = await fetch(`${baseUrl}/article/updateArticleSlug/${articleId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            },
            body: JSON.stringify({ slug, userIp })
        });
        let data = await resp.json();
        props.setLoad1(true);
        return data;
    };

    // Update current article Heading
    const updateArticleHead = async (articleId, editorHead, userIp) => {
        let resp = await fetch(`${baseUrl}/article/editorHead/${articleId}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            },
            body: JSON.stringify({ editorHead, userIp })
        });
        let data = await resp.json();

        return data;
    };

    // Getting article wise goals details
    const getArticleGoals = async (articleId, userIp) => {
        let resp = await fetch(`${baseUrl}/article/getArticleGoals/${articleId}?userIp=${userIp}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            }
        });
        let data = await resp.json();
        return data;
    };

    // Delele the article by id
    const deleteArticle = async (articleId, userIp) => {
        let resp = await fetch(`${baseUrl}/article/deleteArticle/${articleId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            },
            body: JSON.stringify({ userIp })
        });
        let data = await resp.json();
        return data;
    };

    // Declearing variable to use globally for web socket
    var client;

    // Fetch all article categories
    const getArticleCategories = async () => {
        props.setLoad1(false);
        let resp = await fetch(`${baseUrl}/articleCategory/getCategories`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            }
        });
        let data = await resp.json();
        props.setLoad1(true);
        return data;
    };

    // Fetch all article categories
    const postArticleCategory = async (catName, catSlug, catParent, userIp) => {
        let resp = await fetch(`${baseUrl}/articleCategory/postCategory`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            },
            body: JSON.stringify({ catName, catSlug, catParent, userIp })
        });
        let data = await resp.json();
        return data;
    };

    // Fetch all article categories
    const putArticleCategory = async (catId, catName, catSlug, catParent, userIp) => {
        let resp = await fetch(`${baseUrl}/articleCategory/putCategory/${catId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            },
            body: JSON.stringify({ catName, catSlug, catParent, userIp })
        });
        let data = await resp.json();
        return data;
    };

    // Fetch all article categories
    const deleteArticleCategory = async (catId, userIp) => {
        let resp = await fetch(`${baseUrl}/articleCategory/deleteCategory/${catId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            },
            body: JSON.stringify({ userIp })
        });
        let data = await resp.json();
        return data;
    };

    // Update article category
    const updateArticleCat = async (articleId, catDetails, userIp) => {
        props.setLoad1(false);
        let resp = await fetch(`${baseUrl}/article/updateCategory/${articleId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            },
            body: JSON.stringify({ catDetails, userIp })
        });
        let data = await resp.json();
        props.setLoad1(true);
        return data;
    };

    // Remove article category
    const removeArticleCat = async (articleId, catIds, userIp) => {
        props.setLoad1(false);
        let resp = await fetch(`${baseUrl}/article/removeCategory/${articleId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            },
            body: JSON.stringify({ catIds, userIp })
        });
        let data = await resp.json();
        props.setLoad1(true);
        return data;
    };

    // Update article active user
    const updateActiveUser = async (articleId, userType, userIp) => {
        props.setLoad1(false);
        let resp = await fetch(`${baseUrl}/article/updateActiveUser/${articleId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            },
            body: JSON.stringify({ userType, userIp })
        });
        let data = await resp.json();
        props.setLoad1(true);
        return data;
    };

    /* ------------ Article Date Section ------------ */
    // Get article date info
    const getArticleInfo = async (userIp) => {
        props.setLoad1(false);
        let resp = await fetch(`${baseUrl}/article/getArticleInfo?userIp=${userIp}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            }
        });
        let data = await resp.json();
        props.setLoad1(true);
        return data;
    };

    /* ------------- Overview Section -------------- */
    // analyzeLinks
    const analyzeLinks = async (urls, topicsArr, userIp) => {
        props.setLoad1(false);
        let resp = await fetch(`${baseUrl}/overview/analyzeLinks`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
            },
            body: JSON.stringify({ urls, topicsArr, userIp })
        });
        let data = await resp.json();
        props.setLoad1(true);
        return data;
    };

    // Update UserGroup
    // async function updateUserGroup(name,flag)
    // {

    //     let resp=await fetch(`${baseUrl}/user/updateUserGroup/`,{
    //         method:'PUT',
    //         headers:{
    //             'content-type':'application/json',
    //             'jwt': JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token
    //         },
    //         body:JSON.stringify({name,flag})
    //     });
    //     let data=await resp.json();
    //     console.log(data);
    //     return data;
    // }

    return (
        <>
            <MainContext.Provider value={{ login, signin, email2fa, verifyOtp, verifyOtp1, userDetail, userData, genQr, verify2, remove2fa, getCountryData, countryData, verifyReft, ua, verifyJwt, verifySession, logout, removeSession, removeAllSessionByUser, getCurrentSession, heartBeat, putArticle, getArticle, article, updateArticleHead, newArticle, fetchUserArticles, userArciles, getArticleGoals, deleteArticle, getArticleBySlug, updateArticleBySlug, lastHeartBeat, client, getArticleCategories, postArticleCategory, putArticleCategory, deleteArticleCategory, updateArticleCat, removeArticleCat, updateActiveUser, getArticleInfo, getVersionHistory, analyzeLinks, getUserSessions }}>
                {props.children}
            </MainContext.Provider>
        </>
    )
}

export default MainState;
