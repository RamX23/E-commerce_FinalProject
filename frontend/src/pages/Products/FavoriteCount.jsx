import { useSelector } from "react-redux"

const FavoriteCount = () => {
    const favorites=useSelector((state)=>state.favorites);
    const count=favorites.length;
  return (
    <div>
      {
        count>0 && (
            <span className="px-1 py-0 text-sm text-white bg-pink-500 rounded-full">
                {count}
            </span>
        )
      }
    </div>
  )
}

export default FavoriteCount
