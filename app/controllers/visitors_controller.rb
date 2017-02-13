class VisitorsController < ApplicationController

  def index
    @properties = Property.all
  end
  
end
