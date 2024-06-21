package com.example.foodwell.ui.news

import android.os.Bundle
import android.widget.ImageView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.example.foodwell.R

class NewsActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_news)

        val headingNews : TextView = findViewById(R.id.heading)
        val mainNews : TextView = findViewById(R.id.news)
        val imageNews : ImageView =findViewById(R.id.image_heading)

        val bundle : Bundle?= intent.extras
        val heading = bundle!!.getString("heading")
        val imageId = bundle.getInt("image_heading")
        val news = bundle.getString("news")


        headingNews.text = heading
        mainNews.text = news
        imageNews.setImageResource(imageId)
    }
    }

