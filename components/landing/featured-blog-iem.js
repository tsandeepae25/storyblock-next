const FeaturedBlogItem = ({ data }) => {
  // console.log(data.content.title);
  return (

    <div className="h-full">
      {data &&
        <div className="h-full">
          <div className="h-full border border-slate-500 overflow-hidden">
            <img className=" h-3/5 w-full object-cover" src={data.content.blog_img} alt="" />
            <div className="h-2/5 p-4 ">
              <h2 className="text-2xl font-light mb-5">{data.content.title}</h2>
              <p className="line-clamp-3 text-sm text-gray-400">{data.content.long_text}</p>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default FeaturedBlogItem;