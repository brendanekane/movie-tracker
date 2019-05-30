class User < ApplicationRecord
  authenticates_with_sorcery!
  validates_confirmation_of :password, message: "Password must match confirmation", if: :password
end
