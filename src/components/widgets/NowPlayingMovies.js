import React , {useEffect, useMemo} from 'react'
import MoivesSlider from "./MoivesSlider";
import { useTranslation } from 'react-i18next';
import { useDispatch , useSelector } from "react-redux";
import { getnowplayingMovies } from "../../redux/action/MoivesAction";
function NowPlayingMovies(type) {

  const { t, i18n } = useTranslation();
    const Dispatch = useDispatch();
    const moviesdata = useSelector((state)=>state.nowPlaying.movies);
    const applang = useSelector((state)=>state.languages.lang);
    useEffect(() => {
      Dispatch(getnowplayingMovies(applang,type.type));
    }, [applang]);
    return (
    <div className="movies-slider now-playing-movies">
    <MoivesSlider movies={moviesdata} slidetitle={t("Now Playing")} />
    </div>
  )
}

export default React.memo(NowPlayingMovies)