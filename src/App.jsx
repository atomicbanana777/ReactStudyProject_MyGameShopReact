import './style/style.css';
import './style/style_game_list.css';
import './style/style_contact_us.css'
import './style/style_news_detail.css'
import './style/style_about.css'

import {createBrowserRouter,RouterProvider} from 'react-router';
import MainLayout from './pages/MainLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import GameListPage from './pages/GameListPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import GameDetailPage from './pages/GameDetailPage.jsx';
import GudieDetailPage from './pages/GuideDetailPage.jsx';
import NewsDetailPage from './pages/NewsDetailPage.jsx';
import AddGuidePage from './pages/AddGuidePage.jsx';
import AddReviewPage from './pages/AddReviewPage.jsx';
import EditReviewPage from './pages/EditReviewPage.jsx';
import AddGamePage from './pages/AddGamePage.jsx';
import EditGamePage from './pages/EditGamePage.jsx';
import AddNewsPage from './pages/AddNewsPage.jsx';
import EditNewsPage from './pages/EditNewsPage.jsx';
import EditGuidePage from './pages/EditGuidePage.jsx';

function App() {

  const postReviews = async (newReview) => {
      try {
          const apiUrl = `/api/reviews`;
          const res = await fetch(apiUrl,{
              method : 'POST',
              header : {'Content-Type' : 'application/json'},
              body : JSON.stringify(newReview)
          });
      } catch (error) {
          console.log("something went wrong when post reviews " + error);
      }
      return;
  }

  const editReviews = async (newReview) => {
      try {
          const apiUrl = `/api/reviews/${newReview.id}`;
          const res = await fetch(apiUrl,{
              method : 'PUT',
              header : {'Content-Type' : 'application/json'},
              body : JSON.stringify(newReview)
          });
      } catch (error) {
          console.log("something went wrong when post reviews " + error);
      }
      return;
  }


  const fetchReviews = async ({ params }) => {
        try {
            const apiUrl = `/api/reviews/${params.id}`;
            const res = await fetch(apiUrl);
            const data = await res.json();
            return data;
        } catch (error) {
            console.log("something with wrong " + error);
        }
    }

  const addGame = async (newGame) => {
        try {
            const apiUrl = '/api/games';
            const res = await fetch(apiUrl, {
                method : 'POST',
                header : {'Content-Type' : 'application/json'},
                body : JSON.stringify(newGame)
            });
        } catch (error) {
            console.log("something went wrong when adding new game " + error);
        }
        return;
  }

  const delGame = async (id) => {
        try {
            const apiUrl = `/api/games/${id}`;
            const res = await fetch(apiUrl, {
                method : 'DELETE'
            });

            delReview(id);
        } catch (error) {
            console.log("something went wrong when adding new game " + error);
        }
        return;
  }

  const delReview = async (id) => {
        try {
            const apiUrl = `/api/reviews/${id}`;
            const res = await fetch(apiUrl, {
                method : 'DELETE'
            });
        } catch (error) {
            console.log("something went wrong when adding new game " + error);
        }
        return;
  }

  const fetchGameDetails = async ({ params }) => {
        try {
            const apiUrl = `/api/games/${params.id}`;
            const res = await fetch(apiUrl);
            const data = await res.json();
            return data;
        } catch (error) {
            console.log("something with wrong " + error);
        }
        return null;
    }

    const updateGame = async (updateGame) => {
        try {
            const apiUrl = `/api/games/${updateGame.id}`;
            const res = await fetch(apiUrl, {
                method : 'PUT',
                header : {'Content-Type' : 'application/json'},
                body : JSON.stringify(updateGame)
            });
        } catch (error) {
            console.log("something with wrong " + error);
        }
        return;
    }

  const postNews = async (newNews) => {
    try {
        const apiUrl = '/api/newses';
        const res = await fetch(apiUrl, {
            method : 'POST',
            header : {'Content-Type' : 'application/json'},
            body : JSON.stringify(newNews)
        })
    } catch (error) {
        console.log("something went wrong " + error);
    }
    return;
  }

  const postGuide = async (newGuides) => {
        try {
            const apiUrl = '/api/guides';
            const res = await fetch(apiUrl,{
                    method : 'POST',
                    header : {'Content-Type' : 'application/json'},
                    body : JSON.stringify(newGuides)
            });
        } catch (error) {
            console.log("something went wrong " + error);
        }
        return;
    }

    const fetchNewsDetail = async ({params}) => {
        try {
            const apiUrl = `/api/newses/${params.id}`;
            const res = await fetch(apiUrl);
            if(res.ok) {
                const data = await res.json();
                return data;
            }
        } catch (error) {
            console.log("something went wrong " + error);
        }
    }

    const updateNews = async (newNews) => {
        try {
        const apiUrl = `/api/newses/${newNews.id}`;
        const res = await fetch(apiUrl, {
            method : 'PUT',
            header : {'Content-Type' : 'application/json'},
            body : JSON.stringify(newNews)
        })
    } catch (error) {
        console.log("something went wrong " + error);
    }
    return;
    }

  const deleteNews = async (id) => {
    try {
        const apiUrl = `/api/newses/${id}`;
        const res = await fetch(apiUrl, {
            method : 'DELETE'
        })
    } catch (error) {
        console.log("something went wrong " + error);
    }
    return;
  }

  const fetchGuideDetail = async ({params}) => {
        try {
            const apiUrl = `/api/guides/${params.id}`;
            const res = await fetch(apiUrl);
            
            if(res.ok) {
                const data = await res.json();
                return data;
            }
            
        } catch (error) {
            console.log("something went wrong " + error);
        }
  }

  const updateGuide = async (newGudie) => {
    try {
        const apiUrl = `/api/guides/${newGudie.id}`;
        const res = await fetch(apiUrl, {
            method : 'PUT',
            header : {'Content-Type' : 'application/json'},
            body : JSON.stringify(newGudie)
        })
    } catch (error) {
        console.log("something went wrong " + error);
    }
    return;
  }

  const deleteGuide = async (id) => {
    try {
        const apiUrl = `/api/guides/${id}`;
        const res = await fetch(apiUrl, {
            method : 'DELETE'
        })
    } catch (error) {
        console.log("something went wrong " + error);
    }
    return;
  }

  const LoadingFallback = () => {
      return <h2>Loading data...</h2>;
    }

  const router = createBrowserRouter(
    [
        {
        element: <MainLayout />,
        children: [
                {path: "/", element: <HomePage />, index: true},
                {path: "/games", element: <GameListPage />},
                {path: "/about", element: <AboutPage />},
                {path: "/contact", element: <ContactUsPage />},
                {path: "/games/:id", element: <GameDetailPage />},
                {path: "/guides/:id", element: <GudieDetailPage />},
                {path: "/newses/:id", element: <NewsDetailPage />},
                {path: "/addguides", element: <AddGuidePage postGuide={postGuide}/>},
                {path: "/editguides/:id", element: <EditGuidePage updateGuide={updateGuide} deleteGuide={deleteGuide}/>, loader: fetchGuideDetail},
                {path: "/addreviews/:id", element: <AddReviewPage updateReviewSubmit={postReviews}/>},
                {path: "/editreviews/:id", element: <EditReviewPage updateReviewSubmit={editReviews}/>, loader: fetchReviews},
                {path: "/addgame", element: <AddGamePage postGameSubmit={addGame}/>},
                {path: "/editgame/:id", element: <EditGamePage updateGameSubmit={updateGame} deleteGameSubmit={delGame}/>, loader: fetchGameDetails},
                {path: "/addnews", element: <AddNewsPage postNewsSubmit={postNews} />},
                {path: "/editnews/:id", element: <EditNewsPage updateNews={updateNews} deleteNews={deleteNews}/>, loader: fetchNewsDetail}
                
            ]
        }
    ]
    );

  return (
    <RouterProvider router={router} />
  )
}

export default App;