---
layout: page
title: Posts
permalink: /posts/
---

<ul>
  {% for post in site.posts %}
    <li class="list-none">
      <h2><a href="{{ post.url }}" class="no-underline">{{ post.title }}</a></h2>
      <img src="{{ post.feature }}" class="rounded-lg mb-5"/>
      <div class="has-drop-cap">
        {{ post.excerpt }}
      </div>
    </li>
  {% endfor %}
</ul>

If you have a lot of posts, you may want to consider adding [pagination](https://www.bridgetownrb.com/docs/content/pagination)!
