# Parcel

- it creates dev build
- it create local server
- HMR(Hot Module Replacement)
- File Watching Algorithm - [written in C++]
- Image optimization
- Minification of our file for production build
- Bundling
- Compress our file
- Consistent Hashing - [make your experience super smooth]
- Code splitting
- Differential bundling - to support older/different browsers
- Diagnostics
- Gives good error handling suggestions
- HTTPs
- Increase developer experience
- Tree Shaking(algorithm) - [it will remove unused codes ]

Header

- logo
- nav items
  body
- search
- RestaurantContainer
  - restaurantCard - img - name of res, star rating, cuisine, delivery time
    fooer
- copyright
- links
- address
  -contact

198212 - NRK
419248 - hott spot

# menu api of sivakasi

https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.5187255&lng=77.80241699999999&restaurantId=198212

https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.5187255&lng=77.80241699999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

# Lazy Loading - lazy(()=>import("")), <suspense fallback={jsx}/>

other names

- Chunking
- Dynamic Bundling
- Code Splitting
- On Demand Loading
- Dynamic Import

# res menu name

resInfo?.cards[2]?.card?.card?.info;

# Redux Toolkit

- install @reduxjs/toolkit
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector
