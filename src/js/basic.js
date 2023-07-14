export default function showSpecialAttacks({ special = [] }) {
  return special.map(({ description = 'Описание недоступно', ...rest }) => ({ description, ...rest }));
}
