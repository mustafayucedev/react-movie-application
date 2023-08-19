import { useMovie } from "context/movie";
import Title from "components/title/Title";

const API_IMG = "https://image.tmdb.org/t/p/w500/"
const NULL_IMG = "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"


const MovieCast = () => {

  const { movieCast } = useMovie();

  const sliced = movieCast.slice(0,10)

  return (
    <>
      <Title>CAST</Title>
      <ul className="grid grid-cols-5 gap-5 mb-10">
      {sliced &&
          sliced.map((item, index) => (
            <li key={index}>
              <img
              className="rounded-full w-24 h-24 mx-auto object-cover mb-3" 
              src={item.profile_path ? API_IMG + item.profile_path : NULL_IMG} 
              alt={item.name} />
              <strong className="block text-center text-xs"> {item.name} </strong>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieCast;
