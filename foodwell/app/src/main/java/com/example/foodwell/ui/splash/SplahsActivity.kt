package com.example.foodwell.ui.splash

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import androidx.appcompat.app.AppCompatActivity
import com.example.foodwell.R
import com.example.foodwell.ui.login.LoginActivity
import com.example.foodwell.ui.welcome.WelcomeActivity

class SplashActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splash)  // Pastikan Anda memiliki layout untuk SplashActivity

        // Delay untuk 3 detik sebelum berpindah ke WelcomeActivity
        Handler(Looper.getMainLooper()).postDelayed({
            startActivity(Intent(this, WelcomeActivity::class.java))
            finish()  // Menutup activity ini agar tidak kembali ke splash screen
        }, 3000)  // 3000 ms = 3 detik
    }
}
