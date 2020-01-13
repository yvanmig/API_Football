<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="style/reset.css" rel="stylesheet" type="text/css">
    <link href="style/style.css" rel="stylesheet" type="text/css">
    <title>Site Gimard</title>
</head>
<body>
    <div id="containerPage">
        <div id="moitiePageGauche">
            <div class="wrap">
                <div id="selectionLeague">
                    <div class="league" id="leagueActive">
                        <div>
                        <img src="image/premier_league.png" alt="Logo premier league">
                        </div>
                        <!-- <span class="rectSelect"></span> -->
                    </div>
                    <div class="league">
                        <img src="image/logotype-ligue-1.png" alt="Logo premier league">
                        <!-- <span class="rectSelect"></span> -->
                    </div>
                    <div class="league">
                    <img src="image/laliga.png" alt="Logo premier league">
                        <!-- <span class="rectSelect"></span> -->
                    </div>
                    <div class="league">
                        <img src="image/logotype-serie-a.svg" alt="Logo premier league">
                        <!-- <span class="rectSelect"></span> -->
                    </div>
                    <div class="league">
                        <img src="image/logotype-bundesliga.svg" alt="Logo premier league">
                        <!-- <span class="rectSelect"></span> -->
                    </div>
                </div>


            </div>
        <!-- Fin wrap -->

                <div id="sectionClubs">
                    <div class="wrap">
                        <div id="searchBar">
      <input type="text" placeholder="Search club" name="search">
                        </div>


                        <div class="Rectangle"></div>
                        <div id="blocLogos">
                        

                
                        </div> 
                </div>
            </div> <!-- fin wrap !-->
        </div> <!-- fin moitie gauche !-->
        <div class="moitiePageDroite">
            <div class="wrap">
                <div class="choixLeagueLogo">
                <img src="image/logotype-premier-league.png"
                    srcset="image/logotype-premier-league@2x.png 2x,
                            image/logotype-premier-league@3x.png 3x"
                    class="Logotype-Premier-League">
                </div>
                <h1 class="tables">Tables</h1>
                <div id="containerLignes">
                </div> <!-- fin container ligne-->   
            </div> <!-- fin wrap -->
            <div class="filtreViolet">                    
            </div>
        </div>
    </div>    
    <!-- Deuxième page -->
    <div id="containerPage2">
        <div id="moitieGauche2">
            <div id="boutonFermer">
                <img src="image/cross.svg" alt="">
            </div>
        </div>
        <div id="moitieDroite2">
            <div class="wrap2">
                <div id="presentationClub">
                    <div class="imagePresentation">
                    <img src="image/arsenal.png" alt="">
                    </div>
                    <div class="descriptionClub">
                        <h2>Arsenal</h2>
                        <p>Emirate Stadium</p>
                        <p><span class="descriptionBold">Official website : </span> www.arsenal.com</p>
                        <p><span class="descriptionBold">Head Coach : </span> Unai Emery</p>
                    </div>
                </div>
                <div id="searchBar2">
                    <input type="text" placeholder="Search player" name="search">
                </div>
                <hr>
                <div id="containerHeaderGrid">
                    <div id="numberPlayer">#</div>
                    <div id="namePlayer">Name</div>
                    <div id="nationalityPlayer">Nationality</div>
                    <div id="birthPlayer">Date of birth</div>
                    <div id="positionPlayer">Position</div>
                </div>
            </div>
            
        </div>
    </div>

    <script type="text/javascript" src="script/jquery.js"></script>
    <script type="text/javascript" src="script/script.js"></script>
    <script src="script/mustache.js"></script>
    <script src="script/mustache.min.js"></script>
</body>
</html>