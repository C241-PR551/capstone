package com.example.foodwell.ui.main

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.foodwell.R
import com.example.foodwell.ui.news.NewsActivity

class MainActivity : AppCompatActivity() {
    private lateinit var newRecyclerView: RecyclerView
    private lateinit var newArrayList: ArrayList<AritikelBaru>
    lateinit var imageId: Array<Int>
    lateinit var heading: Array<String>
    lateinit var news: Array<String>
    lateinit var button: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        imageId = arrayOf(
            R.drawable.a,
            R.drawable.b,
            R.drawable.c,
            R.drawable.d,
            R.drawable.e,
            R.drawable.f,
            R.drawable.g,
            R.drawable.h,
            R.drawable.i,
            R.drawable.j,


            )

        heading = arrayOf(
            "Healthy Diet Food: Steak Tenderloin with Egg and Vegetables",
            "Healthy Diet Food: Beef Slice, Boiled Egg, Jagung, Tomat dan Labu Siam\n",
            "Healthy Diet Food: Ayam Panggang + Kentang + Tabur Kacang",
            "Healthy Sandwich (Gluten Free Bread)",
            "Strawberry and Yogurt Healthy Sandwich",
            "Sandwich for diet - sarapan sehat tetap kenyang satu harian NO MINYAK\n",
            "Healthy Diet Food: Mangga semangka jeruk",
            "Healthy Diet Food: Dori Panggang + Telur Rebus + Selada Jagung",
            "Steak Tempe - healthy food",
            "Garlic Lemon Butter Salmon with Cheesy Baked Potato n Cauliflower (easy-healthy)",


            )


        news = arrayOf(
            getString(R.string.news_a),
            getString(R.string.news_b),
            getString(R.string.news_c),
            getString(R.string.news_d),
            getString(R.string.news_e),
            getString(R.string.news_f),
            getString(R.string.news_g),
            getString(R.string.news_h),
            getString(R.string.news_i),
            getString(R.string.news_j),


            )

        newRecyclerView = findViewById(R.id.recyclerView)
        newRecyclerView.layoutManager = LinearLayoutManager(this)
        newRecyclerView.setHasFixedSize(true)


        newArrayList = arrayListOf<AritikelBaru>()
        getUserdata()

        button = findViewById(R.id.button)

    }

    private fun getUserdata() {

        for (i in imageId.indices) {

            val news = AritikelBaru(imageId[i], heading[i])
            newArrayList.add(news)

        }

        var adapter = MyAdapter(newArrayList)
        newRecyclerView.adapter = adapter
        adapter.setOnItemClickListener(object : MyAdapter.onItemClickListener {
            override fun onItemClick(position: Int) {

                //Toast.makeText(this@MainActivity,"You Cliked no item no. $position", Toast.LENGTH_SHORT).show()


                val intent = Intent(this@MainActivity, NewsActivity::class.java)
                intent.putExtra("heading", newArrayList[position].heading)
                intent.putExtra("image_heading", newArrayList[position].titleImage)
                intent.putExtra("news", news[position])
                startActivity(intent)


            }


        })


    }


}