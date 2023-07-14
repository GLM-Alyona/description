const specialAttack = [];

export default function showSpecialAttacks({
  special: [{
    id, name, icon, description = 'Описание недоступно',
  }, ...data],
}) {
  specialAttack.push({
    id, name, icon, description,
  });
  if (data.length) {
    showSpecialAttacks({ special: data });
  }
  return specialAttack;
}

/* второй вариант
export default function showSpecialAttacks({special}) {

special.forEach(element => {
  if (!element.description) {
    element.description = ' Описание недоступно';
  }
});

return special;
}
*/
