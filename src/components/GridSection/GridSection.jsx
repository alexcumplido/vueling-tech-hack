import { createApi } from "unsplash-js";
import { useState, useEffect } from "react";
export function GridSection() {
  const unsplash = createApi({
    accessKey: "rZ8h1EOAVbc9LxzA3NkR-VwYuCAm_F5CVxhkOWrH0S4",
  });

  useEffect(function () {
    unsplash.photos.get({ photoId: "foo" }).then((result) => {
      if (result.errors) {
        // handle error here
        console.log("error occurred: ", result.errors[0]);
      } else {
        // handle success here
        const photo = result.response;
        console.log(photo);
      }
    });
  }, []);
  // non-feed example

  return <h1> I am a nice grid section, how is great, really, really great</h1>;
}
