import { PlayerData } from "../../types/player";
import { toggleFavorite } from "../../store/slices/playersSlice";
import { useDispatch } from "react-redux";

type PlayerItemProps = React.HTMLAttributes<HTMLDivElement> & {
  player: PlayerData;
};

export function PlayerItem(props: PlayerItemProps) {
  const { player, ...rest } = props;
  const { first_name, last_name, isFavorite, id } = player;

  const dispatch = useDispatch();

  const fullname = `${first_name} ${last_name}`;

  function onToggleFavorite() {
    dispatch(toggleFavorite({ playerId: id, isFavorite: !isFavorite }));
  }

  return (
    <div {...rest}>
      <input type="checkbox" checked={isFavorite} onClick={onToggleFavorite} />
      {fullname}
    </div>
  );
}
