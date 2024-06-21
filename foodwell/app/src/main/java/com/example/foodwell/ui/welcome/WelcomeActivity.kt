package com.example.foodwell.ui.welcome

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.foodwell.databinding.ActivityWelcomeBinding
import com.example.foodwell.ui.login.LoginActivity

class WelcomeActivity : AppCompatActivity() {
    private lateinit var binding: ActivityWelcomeBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityWelcomeBinding.inflate(layoutInflater)
        setContentView(binding.root)

        actionJoin()  // Menambahkan ini untuk mengaktifkan listener
    }

    private fun actionJoin() {
        binding.fbJoin.setOnClickListener {
            startActivity(Intent(this, LoginActivity::class.java))
        }
    }
}
