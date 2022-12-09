NaN == NaN 
// false

Number.isNaN(NaN); // true
Number.isNaN( 2 * 1 + 'baji' * 45); // true
// 2 * 1 + 'baji' * 45
// 2 + 'baji' * 45
// 2 + NaN
// NaN

Number.isNaN( 1000 ); // false
Number.isNaN(56 * 99 ); // false
Number.isNaN( "baji" ); // false
Number.isNaN( true ); // false
Number.isNaN( NaN); // true