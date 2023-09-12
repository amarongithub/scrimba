const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const postMainSectionEl = document.querySelector(".post-main-section");
const containerEl = document.querySelector(".post-main-section .container");

for (let i = 0; i < posts.length; i++) {
  const postEl = document.createElement("section");
  const postTopSectionEl = document.createElement("section");
  const postImageSectionEl = document.createElement("section");
  const postIconSectionEl = document.createElement("section");
  const postLikeSectionEl = document.createElement("section");
  const postLikesEl = document.createElement("p");
  const postCommentsSectionEl = document.createElement("section");
  const postCommentsEl = document.createElement("p");

  // Top Section
  postTopSectionEl.classList.add("post-top-section");
  postTopSectionEl.appendChild(
    createPostImage(posts[i].avatar, posts[i].name, "avatar"),
  );
  postTopSectionEl.appendChild(
    createPostOwnerLocation(posts[i].name, posts[i].location),
  );

  // Post Section
  postImageSectionEl.classList.add("post-img-section");
  postImageSectionEl.appendChild(
    createPostImage(posts[i].post, posts[i].name, "post"),
  );

  // Icons section - heart, comment, dm
  postIconSectionEl.classList.add("post-icon-section");
  postIconSectionEl.appendChild(createPostIcons("heart"));
  postIconSectionEl.appendChild(createPostIcons("comment"));
  postIconSectionEl.appendChild(createPostIcons("dm"));

  // Likes section
  postLikeSectionEl.classList.add("post-likes-section");
  postLikesEl.classList.add("bold-font", "post-likes");
  postLikesEl.innerText = `${posts[i].likes} likes`;
  postLikeSectionEl.appendChild(postLikesEl);

  // Comments section
  postCommentsSectionEl.classList.add("post-comments-section");
  postCommentsEl.classList.add("normal-font", "post-comments");
  postCommentsEl.innerHTML = `<span class="bold-font post-comment-owner">${posts[i].username}</span> ${posts[i].comment}`;
  postCommentsSectionEl.appendChild(postCommentsEl);

  // Append section to post
  postEl.classList.add("post");
  postEl.appendChild(postTopSectionEl);
  postEl.appendChild(postImageSectionEl);
  postEl.appendChild(postIconSectionEl);
  postEl.appendChild(postLikeSectionEl);
  postEl.appendChild(postCommentsSectionEl);

  // Append post to main posts container
  containerEl.appendChild(postEl);
}

postMainSectionEl.innerHTML = "";
postMainSectionEl.appendChild(containerEl);

function createPostImage(imgLocation, name, type) {
  const postAvatarEl = document.createElement("img");
  const postImageEl = document.createElement("img");

  if (type === "avatar") {
    postAvatarEl.classList.add("post-avatar");
    postAvatarEl.src = `${imgLocation}`;
    postAvatarEl.alt = `${name} ${type}`;
    return postAvatarEl;
  } else if (type === "post") {
    postImageEl.classList.add("post-img");
    postImageEl.src = `${imgLocation}`;
    postImageEl.alt = `${name} ${type}`;
    return postImageEl;
  }
}

function createPostOwnerLocation(name, location) {
  const postOwnerLocationEl = document.createElement("section");
  const postOwnerEl = document.createElement("h3");
  const postLocationEl = document.createElement("p");

  postOwnerEl.classList.add("bold-font", "post-owner");
  postOwnerEl.textContent = `${name}`;
  postLocationEl.classList.add("normal-font", "post-location");
  postLocationEl.textContent = `${location}`;
  postOwnerLocationEl.classList.add("post-owner-location");
  postOwnerLocationEl.appendChild(postOwnerEl);
  postOwnerLocationEl.appendChild(postLocationEl);
  return postOwnerLocationEl;
}

function createPostIcons(name) {
  const postIconHeartEl = document.createElement("img");
  const postIconCommentEl = document.createElement("img");
  const postIconDMEl = document.createElement("img");

  if (name === "heart") {
    postIconHeartEl.classList.add("post-icon", `post-icon-${name}`);
    postIconHeartEl.src = `images/icon-${name}.png`;
    postIconHeartEl.alt = `icon-${name}`;
    return postIconHeartEl;
  } else if (name === "comment") {
    postIconCommentEl.classList.add("post-icon", `post-icon-${name}`);
    postIconCommentEl.src = `images/icon-${name}.png`;
    postIconCommentEl.alt = `icon-${name}`;
    return postIconCommentEl;
  } else if (name === "dm") {
    postIconDMEl.classList.add("post-icon", `post-icon-${name}`);
    postIconDMEl.src = `images/icon-${name}.png`;
    postIconDMEl.alt = `icon-${name}`;
    return postIconDMEl;
  }
}
