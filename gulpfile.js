// Usando import ao invés de require para módulos ESM
import gulp from 'gulp';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import * as sassCompiler from 'sass';  // Atualizando para usar a sintaxe correta

// Configurando o gulp-sass para usar o compilador sass
const gulpSass = sass(sassCompiler);

// Tarefa para compilar o SASS
gulp.task('sass', function() {
  return gulp.src('src/sass/**/*.scss')  // Caminho dos arquivos SASS
    .pipe(gulpSass().on('error', gulpSass.logError))  // Compila o SASS e trata erros
    .pipe(gulp.dest('dist/css'));  // Pasta de saída para os arquivos CSS
});

// Tarefa para minificar o JavaScript
gulp.task('scripts', function() {
  return gulp.src('src/js/**/*.js')  // Caminho dos arquivos JS
    .pipe(uglify())  // Minifica os arquivos JS
    .pipe(gulp.dest('dist/js'));  // Pasta de saída para os arquivos JS
});

// Tarefa para otimizar as imagens
gulp.task('images', function() {
  return gulp.src('src/images/*')  // Caminho das imagens
    .pipe(imagemin())  // Otimiza as imagens
    .pipe(gulp.dest('dist/images'));  // Pasta de saída para as imagens
});

// Tarefa padrão que será executada quando o comando `gulp` for chamado
gulp.task('default', gulp.parallel('sass', 'scripts', 'images'));
