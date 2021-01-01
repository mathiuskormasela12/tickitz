let mix = require('laravel-mix');

mix
  .js('src/js/bootstrap.js', 'js')
  .js('src/js/script.js', 'js')
  .sass('src/sass/bootstrap.scss', 'css')
  .sass('src/sass/login.scss', 'css')
  .sass('src/sass/register.scss', 'css')
  .sass('src/sass/forgot.scss', 'css');