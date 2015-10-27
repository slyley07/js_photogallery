function html(thing) {
  '<img src="public/images/' + thing + '">';
}

console.log(cartoons[i]);

function image(thang) {
  cartoons = ['adventure.png', 'avatar.jpg', 'bravest.png', 'gravity.png', 'regular.png', 'steven.png'];
      for (i= 0; i < cartoons.length; i++){
        console.log(html(cartoons[i]));
        thang.innerHTML = html(cartoons[i + 1]);
        // break;
  };
}





// $(document).ready(function() {
//   $('.right').click(function(){
//           // case cartoons[1]:
//           //   html(cartoons[2]);
//           //   break;
//           // case cartoons[2];
//           //   html(cartoons[3]);
//           //   break;
//           // case cartoons[3];
//           //   html(cartoons[4])
//
//         }
//
//       }
//
//       // if ($('.big').html() !== 0 ) {
//       //   console.log('<img src="public/images/' + cartoons[i] + '">');
//       //   cartoons[i] = cartoons[i + 1]
//       //
//       // } else {
//       //   console.log('<img src="public/images/' + cartoons[i] + '">', "no");
//       // };
//       // break;
//     };
//   });
// })
