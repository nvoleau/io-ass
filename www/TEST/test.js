<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">

    <script src="../lib/angular/angular.js"></script>
      <script src="test.js"></script>


      <script type="text/javascript">

          function myC($scope) {
              $scope.nm = 'toto';
          }

      </script>



  </head>

  <body ng-app>

        <div ng-controller="myC">
            {{ nm }}
        </div>





  </body>
</html>
