SELECT store.$1, shelf_a.$2, shelf_a.name, shelf_a.price
FROM store
RIGHT JOIN shelf_a ON store.$1 =
shelf_a.$1